# Database Updates for Meta Ads & Attribution Tracking

To support campaign attribution, Meta Conversions API deduplication, and full lead tracking:

### 1. Ensure `source_page` supports long tracking URLs:
```sql
ALTER TABLE `leads_neoassure` MODIFY `source_page` TEXT DEFAULT NULL;
```

### 2. Add tracking and attribution columns (Note: `submit_form.php` will also automatically add them if missing):
```sql
ALTER TABLE `leads_neoassure` ADD COLUMN IF NOT EXISTS `utm_content` VARCHAR(150) DEFAULT NULL;
ALTER TABLE `leads_neoassure` ADD COLUMN IF NOT EXISTS `utm_term` VARCHAR(150) DEFAULT NULL;
ALTER TABLE `leads_neoassure` ADD COLUMN IF NOT EXISTS `fbclid` VARCHAR(255) DEFAULT NULL;
ALTER TABLE `leads_neoassure` ADD COLUMN IF NOT EXISTS `event_id` VARCHAR(100) DEFAULT NULL;
ALTER TABLE `leads_neoassure` ADD INDEX IF NOT EXISTS `idx_event` (`event_id`);
```

### 3. Meta Conversions API (Server-Side CAPI) Setup:
To enable direct server-to-server CAPI delivery:
1. In Meta Business Suite -> Events Manager -> Select Pixel `1696211194785514`.
2. Go to **Settings** -> Scroll to **Conversions API** -> Click **Generate access token**.
3. In your Vercel Project Settings -> **Environment Variables**:
   - Key: `META_CAPI_TOKEN`
   - Value: *(paste the generated access token)*
4. (Optional) For testing with Meta Events Manager's "Test Events" tab:
   - Key: `META_TEST_EVENT_CODE`
   - Value: *(e.g. TEST12345)*

Once deployed, every lead submission is dispatched with:
- Client Meta Pixel event with unique `eventId`
- Server-side Meta Conversions API with the same `event_id` and SHA-256 hashed customer info
- Full UTM and `fbclid` persistence
- Real client IP & User-Agent
