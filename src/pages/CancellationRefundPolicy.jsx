import PolicyLayout from '../components/PolicyLayout.jsx'

const sections = [
  {
    title: 'Cancellation Before Preparation',
    points: [
      'Customers may request cancellation only before the restaurant accepts or starts preparing the order.',
      'Early cancellation requests are reviewed based on restaurant confirmation status and order stage.',
    ],
  },
  {
    title: 'Cancellation After Acceptance',
    points: [
      'Once an order is accepted, preparing, packed, or out for delivery, cancellation may not be possible.',
      'Daawat may refuse cancellation requests after preparation begins to avoid food wastage and operational loss.',
    ],
  },
  {
    title: 'Refund Eligibility',
    points: [
      'Refunds may be considered only for eligible cases such as accepted online payments for cancelled orders or verified service issues approved by Daawat.',
      'Refund decisions depend on payment status, order stage, and issue verification.',
    ],
  },
  {
    title: 'Wrong or Missing Items',
    points: [
      'Customers should report wrong or missing items promptly with order details so Daawat can review the issue and decide an appropriate resolution.',
      'Depending on the case, Daawat may offer a replacement, adjustment, or refund if found valid.',
    ],
  },
  {
    title: 'Refund Timeline',
    points: [
      'For eligible online paid refunds, refund will be processed to the original payment method. Refund timeline may take 5 to 7 working days depending on bank or payment provider.',
    ],
  },
  {
    title: 'COD Orders',
    points: [
      'For Cash on Delivery orders, refunds are generally not applicable unless Daawat decides replacement or adjustment.',
    ],
  },
  {
    title: 'Contact',
    points: [
      'Customers may contact Daawat using the phone number or email listed on this website for cancellation and refund support.',
    ],
  },
]

function CancellationRefundPolicy() {
  return (
    <PolicyLayout
      eyebrow="Cancellation and Refund Policy"
      intro="This policy explains how cancellation requests, refund eligibility, and order issue reviews are handled by Daawat."
      sections={sections}
      title="Cancellation and Refund Policy"
    />
  )
}

export default CancellationRefundPolicy
