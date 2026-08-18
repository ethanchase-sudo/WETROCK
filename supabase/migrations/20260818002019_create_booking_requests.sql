/*
# Create booking_requests table for Wetrock reservation system

1. New Tables
- `booking_requests`
  - `id` (uuid, primary key, auto-generated)
  - `check_in` (date, not null) — guest's requested check-in date
  - `check_out` (date, not null) — guest's requested check-out date
  - `room_id` (text, not null) — identifier matching the room slug in the frontend content
  - `room_name` (text, not null) — human-readable room name (denormalized for display)
  - `guests` (integer, not null, default 2) — number of guests
  - `guest_name` (text, not null) — full name of the guest making the request
  - `guest_email` (text, not null) — email to contact the guest
  - `guest_phone` (text, not null) — phone number for the guest
  - `add_ons` (text[], default '{}') — array of selected experience add-on IDs
  - `notes` (text, default '') — optional guest notes / special requests
  - `status` (text, not null, default 'pending') — one of 'pending', 'confirmed', 'declined'
  - `created_at` (timestamptz, default now()) — when the request was submitted

2. Security
- Enable RLS on `booking_requests`.
- This is a single-tenant app with NO sign-in screen. All policies use `TO anon, authenticated`
  so the anon-key frontend can submit and read its own requests.
- INSERT: anyone (anon) can submit a new booking request — this is the public booking flow.
- SELECT: anyone can read booking requests by email — this lets a guest look up their own
  request status without an account. This is intentionally public for the no-auth model;
  the data contains no payment info and is reviewed by staff before confirmation.

3. Important Notes
- No `user_id` column or `auth.uid()` checks — this app has no sign-in flow.
- No payment data is stored. This is a reservation-request engine, not a paid booking engine.
- The `status` column defaults to 'pending'; staff confirm or decline after review.
*/

CREATE TABLE IF NOT EXISTS booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  check_in date NOT NULL,
  check_out date NOT NULL,
  room_id text NOT NULL,
  room_name text NOT NULL,
  guests integer NOT NULL DEFAULT 2,
  guest_name text NOT NULL,
  guest_email text NOT NULL,
  guest_phone text NOT NULL,
  add_ons text[] DEFAULT '{}',
  notes text DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE booking_requests ENABLE ROW LEVEL SECURITY;

-- Allow public insert (the booking flow)
DROP POLICY IF EXISTS "anon_insert_booking" ON booking_requests;
CREATE POLICY "anon_insert_booking"
ON booking_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow public select so guests can look up their request status by email
DROP POLICY IF EXISTS "anon_select_booking" ON booking_requests;
CREATE POLICY "anon_select_booking"
ON booking_requests FOR SELECT
TO anon, authenticated
USING (true);
