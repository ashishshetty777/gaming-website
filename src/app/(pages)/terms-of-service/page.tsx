import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 mx-10">
      <div className="m-auto">
        <div className="p-4">
          <Link
            href="/"
            className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            <Image
              src={'/assets/enoobs_logo.png'}
              width={200}
              height={200}
              alt="Enoobs Logo"
            />
          </Link>
        </div>
        <h1 className="text-4xl mt-8 mb-4 mx-2 text-center">
          Terms &amp; Conditions
        </h1>
        <div className="mx-2">
          <div className="my-2">
            <div className="text-xl my-2">1. Introduction</div>
            <div className="m-2">
              Welcome to Enoobs, the dedicated social media platform for gamers.
              These Terms and Conditions govern your access to and use of Enoobs
              and its services, which include but are not limited to user
              interaction, content sharing, and KYC verification for gaming IDs.
            </div>
          </div>
          <div className="my-2">
            <div className="text-xl my-2">2. Using Enoobs</div>
            <div className="m-2">
              <div className="font-semibold">a. Eligibility:</div> You must be
              at least 5 years of age to use Enoobs. Users under the age of 18
              require the permission of a parent or guardian to create an
              account. The KYC verification feature is intended for users who
              meet additional age and authentication criteria specific to their
              region.
              <div className="font-semibold">b. License to Use:</div> Subject to
              these Terms, Enoobs grants you a limited, non-exclusive,
              non-transferable, revocable license to use the platform for your
              personal, non-commercial gameplay and social interaction
              activities.
              <div className="font-semibold">c. Prohibited Activities:</div> You
              are prohibited from using the platform to engage in any activity
              that interrupts or attempts to interrupt the operation of the
              site. This includes distributing spam or malicious software,
              conducting fraudulent activities, or engaging in phishing or
              impersonation.
            </div>
          </div>
          <div className="my-2">
            <div className="text-xl my-2">3. User Content</div>
            <div className="m-2">
              <div className="font-semibold">a. Ownership and Permissions:</div>
              You maintain ownership of and responsibility for the content you
              upload. By posting content on Enoobs, you grant us a worldwide,
              perpetual license to host, store, reproduce, modify, create
              derivative works of, communicate, publish, publicly perform,
              publicly display, and distribute such content.
              <div className="font-semibold">b. Content Guidelines:</div>
              Content must not be defamatory, obscene, threatening, invasive of
              privacy, or otherwise harmful to third parties. It must comply
              with all applicable laws, including copyright and trademark laws.
            </div>
          </div>
          <div className="my-2">
            <div className="text-xl my-2">4. Account Security</div>
            <div className="m-2">
              <div className="font-semibold">a. Your Responsibilities:</div> You
              are responsible for safeguarding the password that you use to
              access Enoobs and for any activities or actions under your
              password. Enoobs cannot and will not be liable for any loss or
              damage arising from your failure to comply with this security
              obligation.
            </div>
          </div>
          <div className="my-2">
            <div className="text-xl my-2">5. Privacy and Data Protection</div>
            <div className="m-2">
              <div className="font-semibold">a. Data Use:</div> The personal
              information collected through Enoobs, including KYC data, is
              handled in accordance with our Privacy Policy, which provides
              detailed information on how we collect, use, and protect your data
            </div>
          </div>
          <div className="my-2">
            <div className="text-xl my-2">6. Modifications to the Service</div>
            <div className="m-2">
              <div className="font-semibold">a. Service Changes:</div> Enoobs
              reserves the right at any time and from time to time to modify or
              discontinue, temporarily or permanently, the service with or
              without notice.
            </div>
          </div>
          <div className="my-2">
            <div className="text-xl my-2">
              7. Disclaimer of Warranties; Limitation of Liability
            </div>
            <div className="m-2">
              <div className="font-semibold">a. No Warranties:</div>{' '}
              {`The service
              is provided on an "as is" and "as available" basis. Enoobs
              expressly disclaims all warranties of any kind, whether express or
              implied, including, but not limited to, the implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.`}
            </div>
          </div>
          <div className="my-2">
            <div className="text-xl my-2">8. Termination</div>
            <div className="m-2">
              <div className="font-semibold">a. Rights of Termination:</div>
              Enoobs may terminate your access to all or any part of the service
              at any time, with or without cause, with or without notice,
              effective immediately.
            </div>
          </div>
          <div className="my-2">
            <div className="text-xl my-2">9. Indemnification</div>
            <div className="m-2">
              <div className="font-semibold">a. Your Responsibility:</div>{' '}
              {`You
              agree to indemnify and hold harmless Enoobs, its contractors, and
              its licensors, and their respective directors, officers,
              employees, and agents from and against any and all claims and
              expenses, including attorneys' fees, arising out of your use of
              the website, including but not limited to your violation of this
              Agreement.`}
            </div>
          </div>
          <div className="my-2">
            <div className="text-xl my-2">10. Governing Law</div>
            <div className="m-2">
              <div className="font-semibold">a. Jurisdiction:</div> These terms
              shall be governed by the laws of [Your Country] without regard to
              its conflict of law provisions.
            </div>
          </div>
          <div className="my-2">
            <div className="text-xl my-2">11. Dispute Resolution</div>
            <div className="m-2">
              <div className="font-semibold">a. Mandatory Arbitration:</div> Any
              dispute relating to your use of Enoobs will be arbitrated on an
              individual basis and will not be consolidated in any arbitration
              with any claim or controversy of any other party.
            </div>
          </div>
          <div className="my-2">
            <div className="text-xl my-2">12. Changes to Terms</div>
            <div className="m-2">
              <div className="font-semibold">a. Revisions and Updates:</div> We
              reserve the right to update or change our Terms and Conditions at
              any time and you should check these Terms and Conditions
              periodically. Your continued use of the service after we post any
              modifications to the Terms and Conditions on this page will
              constitute your acknowledgment of the modifications and your
              consent to abide and be bound by the modified Terms and
              Conditions.
            </div>
          </div>
          <div className="my-2">
            <div className="text-xl my-2">13. Contact Information</div>
            <div className="m-2">
              <div className="font-semibold">a. Queries and Concerns:</div> If
              you have any questions about these Terms, please contact us at
              <a className="font-semibold" href="mailto:support@enoobs.com">
                {'  '}support@enoobs.com{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
