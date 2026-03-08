create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text,
  identity_tags text[] not null default '{}',
  created_at timestamptz not null default now(),
  is_anonymous boolean not null default true
);

create table if not exists conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  created_at timestamptz not null default now(),
  crisis_flagged boolean not null default false
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid references conversations(id) on delete cascade,
  role text not null,
  content text not null,
  crisis_score real,
  created_at timestamptz not null default now()
);

create table if not exists journal_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  mood text not null,
  content text not null,
  scripture_ref text,
  created_at timestamptz not null default now()
);

create table if not exists prayer_requests (
  id uuid primary key default gen_random_uuid(),
  content text not null,
  candle_count integer not null default 0,
  category text not null,
  created_at timestamptz not null default now(),
  expires_at timestamptz
);

create table if not exists identity_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  virtue_streak integer not null default 0,
  last_check_in date,
  accountability jsonb not null default '{}'::jsonb
);

create table if not exists donations (
  id uuid primary key default gen_random_uuid(),
  stripe_payment_id text,
  amount_cents integer not null,
  is_recurring boolean not null default false,
  created_at timestamptz not null default now()
);
