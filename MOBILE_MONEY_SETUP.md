# Mobile Money Payment Integration Guide for OFTAC

This guide explains how to set up Mobile Money (MTN MoMo & Airtel Money) payments for accepting donations in Uganda.

## 🚀 Quick Start (Flutterwave - Currently Implemented)

### 1. Sign Up for Flutterwave

1. Go to [Flutterwave](https://flutterwave.com/)
2. Create a business account
3. Complete KYC verification
4. Navigate to Settings → API Keys
5. Copy your **Public Key**

### 2. Configure Your Application

Create a `.env` file in your project root:

```bash
# Create .env file
touch .env
```

Add your Flutterwave public key:

```env
VITE_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_TEST-XXXXXXXXXXXXXXXXXXXXX-X
```

**Important:** 
- For testing, use your **Test Public Key** from Flutterwave dashboard
- For production, use your **Live Public Key**
- Never commit your `.env` file to Git (it should already be in `.gitignore`)

### 3. Test the Integration

1. Start your dev server: `npm run dev`
2. Navigate to `/donate`
3. Fill in the donation form
4. Test with these credentials:
   - **MTN Mobile Money**: Use test numbers provided in Flutterwave dashboard
   - **Airtel Money**: Use test numbers provided in Flutterwave dashboard

### 4. Go Live

1. Complete Flutterwave business verification
2. Switch from test keys to live keys
3. Test with small real transactions
4. Monitor your Flutterwave dashboard for incoming donations

---

## 💰 Pricing (Flutterwave)

- **MTN Mobile Money**: ~1.4% transaction fee
- **Airtel Money**: ~1.4% transaction fee
- No monthly fees
- Settlement within 24-48 hours

---

## 🌍 Alternative Payment Gateway Options for Uganda

### Option 1: **Paystack** (Recommended Alternative)

**Pros:**
- Well-documented API
- Supports MTN & Airtel
- React SDK available
- Good customer support

**Setup:**
1. Sign up at [paystack.com](https://paystack.com/)
2. Install: `npm install @paystack/inline-js`
3. Similar integration pattern to Flutterwave

**Pricing:** ~1.5% + UGX 100 per transaction

---

### Option 2: **Easypay Uganda** (Local Solution)

**Pros:**
- Ugandan company
- Direct API for MTN & Airtel
- Lower fees for local businesses
- Good local support

**Setup:**
1. Register at [easypay.co.ug](https://www.easypay.co.ug/)
2. Enable API from the app
3. Get your API credentials
4. Use their REST API

**Pricing:** Negotiable rates, typically lower than international gateways

**API Documentation:** https://www.easypay.co.ug/kb/

---

### Option 3: **pawaPay** (High Completion Rates)

**Pros:**
- Focused on African mobile money
- High completion rates (95%+)
- Zero chargeback risk
- Supports multiple currencies

**Setup:**
1. Sign up at [pawapay.io](https://www.pawapay.io/)
2. API-first integration
3. Settlements in USD, EUR, or local currency

**Pricing:** Flat fee per transaction (contact for rates)

---

### Option 4: **Yo! Payments** (Uganda-Specific)

**Pros:**
- Established in Uganda
- Direct connection to all major networks
- No middleman
- Lower fees

**Setup:**
1. Register at [yo.co.ug](https://yo.co.ug/)
2. Get API credentials
3. Use their API libraries (Android, PHP, etc.)

**Pricing:** Competitive local rates

---

## 🔧 Backend Integration (Recommended Next Steps)

To track donations and send receipts, you should set up a backend:

### Option 1: Firebase (Quick & Easy)

```bash
npm install firebase
```

**Benefits:**
- Quick to set up
- Real-time database
- Authentication included
- Free tier available

### Option 2: Node.js Backend

Create an API endpoint to:
- Store donation records
- Send email receipts
- Generate tax receipts
- Track donor information

Example endpoint structure:
```
POST /api/donations
{
  "amount": 100000,
  "donor_name": "John Doe",
  "donor_email": "john@example.com",
  "donor_phone": "+256700000000",
  "transaction_id": "FLW-xxx",
  "payment_status": "successful"
}
```

---

## 🔒 Security Best Practices

1. **Never commit API keys to Git**
   - Use environment variables
   - Add `.env` to `.gitignore`

2. **Validate on Backend**
   - Verify payment status with webhook
   - Don't trust frontend data alone

3. **Use HTTPS**
   - Required for production
   - Flutterwave requires HTTPS for live payments

4. **Implement Webhooks**
   - Flutterwave sends payment confirmations
   - Verify webhook signatures
   - Update donation status reliably

---

## 📊 Tracking Donations

### Flutterwave Dashboard Features:
- Real-time transaction monitoring
- Export to CSV/Excel
- Revenue analytics
- Refund management
- Settlement history

### Recommended: Google Analytics Integration

Add to your donation success callback:

```typescript
// After successful payment
gtag('event', 'donation', {
  currency: 'UGX',
  value: amount,
  transaction_id: response.transaction_id,
});
```

---

## 🧪 Testing

### Test Cards & Numbers

Flutterwave provides test credentials in their dashboard:
- Test MTN MoMo number
- Test Airtel Money number
- Test amounts that trigger specific scenarios

### Manual Testing Checklist

- [ ] Small amount donation (UGX 5,000)
- [ ] Large amount donation (UGX 1,000,000)
- [ ] Custom amount
- [ ] Preset amounts
- [ ] MTN Mobile Money
- [ ] Airtel Money
- [ ] Payment cancellation
- [ ] Invalid phone number
- [ ] Insufficient funds
- [ ] Mobile responsive testing

---

## 🚨 Troubleshooting

### "Public key not valid"
- Ensure you've replaced the test key with your actual key
- Check for extra spaces or quotes

### "Payment modal doesn't appear"
- Check browser console for errors
- Ensure Flutterwave script is loaded (check Network tab)
- Verify amount is valid (> 0)

### "Payment successful but not recorded"
- Implement webhook to confirm payments
- Don't rely solely on frontend callback

### "Mobile Money not appearing as option"
- Ensure you're using Uganda currency (UGX)
- Check that `payment_options: "mobilemoneyuganda"` is set
- Verify your Flutterwave account supports Uganda

---

## 📧 Support Contacts

- **Flutterwave Support**: developers@flutterwave.com
- **Flutterwave Docs**: https://developer.flutterwave.com/docs/
- **API Status**: https://status.flutterwave.com/

---

## 🎯 Next Steps

1. ✅ Set up Flutterwave account
2. ✅ Replace API key in code
3. ⬜ Test with sandbox credentials
4. ⬜ Set up backend to track donations
5. ⬜ Implement webhook verification
6. ⬜ Add email receipt sending
7. ⬜ Complete business verification
8. ⬜ Switch to production keys
9. ⬜ Test with real small transactions
10. ⬜ Go live!

---

## 💡 Tips for Success

1. **Start with test mode** - Thoroughly test before going live
2. **Monitor transactions daily** - Check your dashboard regularly
3. **Keep receipts** - Store transaction records for tax purposes
4. **Communicate with donors** - Send thank you emails and receipts
5. **Track impact** - Show donors how their money is being used

---

## 📝 Compliance & Legal

- Ensure your organization is registered for online donations
- Comply with Uganda's data protection regulations
- Keep proper financial records
- Issue tax receipts where applicable
- Have clear terms and conditions

---

For any questions or issues, feel free to reach out to your payment gateway's support team!

