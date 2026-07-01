import { useEffect } from 'react'
import { business } from '../data/siteData.js'
import PolicyLayout from '../components/PolicyLayout.jsx'

const sections = [
  {
    title: 'Request Account Deletion',
    points: [
      'Users can request deletion of their Daawat account and associated data.',
      `To request deletion, email ${business.email} from the phone or account details used in the app so the request can be verified correctly.`,
    ],
  },
  {
    title: 'What To Include',
    points: [
      'Please include your registered mobile number and your name in the email request.',
      'Sending the request from the same contact details used in the app helps us process the request faster and more accurately.',
    ],
  },
  {
    title: 'Data Deleted',
    points: [
      'When the request is verified, Daawat will delete the profile name, phone account, saved addresses, and device tokens associated with the account.',
    ],
  },
  {
    title: 'Data That May Be Retained',
    points: [
      'Order history may be retained only where necessary for restaurant records, payment reconciliation, tax requirements, fraud prevention, or legal compliance.',
    ],
  },
  {
    title: 'Processing Time',
    points: [
      'Verified deletion requests are processed within 7 working days.',
    ],
  },
  {
    title: 'Contact Email',
    points: [`For account deletion support, contact ${business.email}.`],
  },
]

function AccountDeletion() {
  useEffect(() => {
    document.title = 'Daawat Account Deletion'

    return () => {
      document.title = 'Daawat - Food Ordering in Srikalahasti'
    }
  }, [])

  return (
    <PolicyLayout
      eyebrow="Account Deletion"
      intro="This page explains how to request deletion of a Daawat account and the associated customer data used in the app."
      sections={sections}
      title="Daawat Account Deletion"
    />
  )
}

export default AccountDeletion
