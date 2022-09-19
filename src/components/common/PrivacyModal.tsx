import React from "react";

interface Props {
  onClose(): void;
}

const PrivacyModal: React.FC<Props> = ({ onClose }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto lg:max-w-5xl md:max-w-3xl max-w-[320px]">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-[#6B6772] text-[22px] leaing-[30px] font-bold">
                Privacy Policy
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => onClose()}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto h-[700px] overflow-auto text-[14px] leading-[19px] text-[#6B6772]">
              <p>
                Your privacy is of paramount importance to us. In fact, we know
                that you care how information about you is used and shared, and
                we appreciate your trust that we will do so carefully and
                sensibly. We do not provide your personal information (such as
                your name, email, phone number, address, or credit card
                information) to other companies, except as required to transact
                business on your behalf: with the airlines to book your flights
                and purchase tickets, or with credit card companies to redeem
                your miles or points.
                <br />
                <br />
                Please read this privacy policy for all the details.
              </p>
              <br />
              <p className="font-bold">What information do we collect?</p>
              <p>
                We collect information from you when you register on our site,
                subscribe to our newsletter or fill out a form.
                <br />
                <br />
                When ordering or registering on our site, as appropriate, you
                may be asked to enter your: name, e-mail address or phone
                number. You may, however, visit our site anonymously.
                <br />
                <br />
              </p>
              <p className="font-bold">What do we use your information for?</p>
              <p>
                Any of the information we collect from you may be used in one of
                the following ways:
                <br />
                <br />
                To personalize your experience
                <br />
                Your information helps us to better respond to your individual
                needs To improve customer service
                <br />
                Your information helps us to more effectively respond to your
                customer service requests and support needs
                <br />
                <br />
                To process transactions
                <br />
                <br />
                our information, whether public or private, will not be sold,
                exchanged, transferred, or given to any other company for any
                reason whatsoever, without your consent, other than for the
                express purpose of delivering the purchased product or service
                requested.
                <br />
                <br />
                To send periodic emails
                <br />
                <br />
                The email address you provide for order processing, will be used
                to send you information and updates pertaining to your order and
                emails that may include company news, updates, related product
                or service information, etc
                <br />
                <br />
                Note: If at any time you would like to unsubscribe from
                receiving future emails, we include detailed unsubscribe
                instructions at the bottom of each email.
                <br />
                <br />
              </p>
              <p className="font-bold">How do we protect your information?</p>
              <p>
                We implement a variety of security measures to maintain the
                safety of your personal information when you enter, submit, or
                access your personal information. We want you to feel confident
                about using this website to make travel arrangements, and we are
                committed to protecting the information we collect. While no
                website can guarantee security, we have implemented appropriate
                administrative, technical, and physical security procedures to
                help protect the personal information you provide to us. For
                example, only authorized employees are permitted to access
                personal information, and they may only do so for permitted
                business functions. In addition, we use encryption when
                transmitting your sensitive personal information between your
                system and ours, and we employ firewalls and intrusion detection
                systems to help prevent unauthorized persons from gaining access
                to your information.
                <br />
                <br />
              </p>
              <p className="font-bold">Do we use cookies?</p>
              <p>
                Yes, cookies are small files that a site or its service provider
                transfers to your computers hard drive through your Web browser
                (if you allow) that enables the sites or service providers
                systems to recognize your browser and capture and remember
                certain information.
                <br />
                <br />
                We use cookies to understand and save your preferences for
                future visits and compile aggregate data about site traffic and
                site interaction so that we can offer better site experiences
                and tools in the future.
                <br />
                <br />
                The personal data that you submit to us in connection with your
                request will be used solely for the purpose of processing your
                request, and by proceeding with this request, you consent to our
                use of the data for that purpose. You have the right to withdraw
                your consent to our processing of your data at any time.
                <br />
                <br />
              </p>
              <p className="font-bold">Online Advertising We Use</p>
              <p>
                We use Google AdWords Remarketing to advertise trigger across
                the Internet. AdWords remarketing will display relevant ads
                tailored to you based on what parts of the Bookingvault.com
                website you have viewed by placing a cookie on your machine.
                THIS COOKIE DOES NOT IN ANYWAY IDENTIFY YOU OR GIVE ACCESS TO
                YOUR COMPUTER The cookie is used to say "This person visited
                this page, so show them ads relating to that page." Google
                AdWords Remarketing allows us to tailor our marketing to better
                suit your needs and only display ads that are relevant to you.
                <br />
                <br />
              </p>
              <p>
                How to Opt Out of Remarketing and Advertising If you do not wish
                to participate in our Google AdWords Remarketing, you can opt
                out by visiting Google's Ads Preferences Manager You can also
                opt out of any third-party vendor's use of cookies by visiting
                www.networkadvertising.org/choices/
                <br />
                <br />
              </p>
              <p className="font-bold">
                Do we disclose any information to outside parties?
              </p>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties
                your personally identifiable information. This does not include
                trusted third parties who assist us in operating our website,
                conducting our business, or servicing you, so long as those
                parties agree to keep this information confidential. We may also
                release your information when we believe release is appropriate
                to comply with the law, enforce our site policies, or protect
                ours or others rights, property, or safety. However,
                non-personally identifiable visitor information may be provided
                to other parties for marketing, advertising, or other uses.
                <br />
                <br />
              </p>
              <p className="font-bold">Third party links</p>
              <p>
                Occasionally, at our discretion, we may include or offer third
                party products or services on our website. These third party
                sites have separate and independent privacy policies. We
                therefore have no responsibility or liability for the content
                and activities of these linked sites. Nonetheless, we seek to
                protect the integrity of our site and welcome any feedback about
                these sites, and we recommend that you examine the privacy
                statements posted on those other websites to understand their
                procedures for collecting, using, and disclosing personal
                information.
                <br />
                <br />
              </p>
              <p className="font-bold">
                California Online Privacy Protection Act Compliance
              </p>
              <p>
                Because we value your privacy we have taken the necessary
                precautions to be in compliance with the California Online
                Privacy Protection Act. We therefore will not distribute your
                personal information to outside parties without your consent.
                <br />
                <br />
              </p>
              <p className="font-bold">
                Children’s Online Privacy Protection Act Compliance
              </p>
              <p>
                We are in compliance with the requirements of COPPA (Children’s
                Online Privacy Protection Act), we do not collect any
                information from anyone under 13 years of age. Our website,
                products and services are all directed to people who are at
                least 13 years old or older.
                <br />
                <br />
              </p>
              <p className="font-bold">
                Visiting our website from outside the United States
              </p>
              <p>
                If you are visiting our website from outside the United States,
                please be aware that your information may be transferred to,
                stored, and processed in the United States, where our servers
                are located and our central database is operated. The data
                protection and other laws of the United States and other
                countries might not be as comprehensive as those in your
                country, but please be assured that we take steps to ensure that
                your privacy is protected. By using our services, you understand
                that your information may be transferred to our facilities and
                those third parties with whom we share it as described in this
                Policy.
                <br />
                <br />
              </p>
              <p className="font-bold">U.S.-Swiss Safe Harbor Framework</p>
              <p>
                As described on Safe Harbor Privacy Statement, we comply with
                the US-EU Safe Harbor Framework and the US-Swiss Safe Harbor
                Framework as set forth by the US Department of Commerce
                regarding the collection, use and retention of personal
                information from European Union member countries and
                Switzerland.
                <br />
                <br />
              </p>
              <p className="font-bold">Online Privacy Policy Only</p>
              <p>
                This online Privacy Policy applies only to information collected
                through our website and not to information collected offline.
                <br />
                <br />
              </p>
              <p className="font-bold">Your Consent</p>
              <p>
                By using our site, you consent to our Privacy Policy.
                <br />
                <br />
              </p>
              <p className="font-bold">Changes to our Privacy Policy</p>
              <p>
                If we decide to change our privacy policy, we will post those
                changes on this page, and/or update the Privacy Policy
                modification date below.
                <br />
                <br />
                This policy was last modified on 09/03/2022
                <br />
                <br />
              </p>
              <p className="font-bold">Contacting Us</p>
              <p>
                For quick answers to your questions email
                <br />
                customerservice@verticalfleet.com
                <br />
                Attn: Customer Service <br />
                VerticalFleet.com
                <br />
                1810 E Sahara Ave Ste 212 #2180
                <br />
                Las Vegas, Nevada, 89104 United States
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default PrivacyModal;
