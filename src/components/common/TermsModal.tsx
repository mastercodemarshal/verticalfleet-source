import React from "react";

interface Props {
  onClose(): void;
}

const TermsModal: React.FC<Props> = ({ onClose }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto lg:max-w-5xl md:max-w-3xl max-w-[320px]">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-[#6B6772] text-[22px] leaing-[30px] font-bold">
                Terms and Conditions
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
              <p className="font-bold">
                Your Agreement with Vertical Fleet, Inc.
              </p>
              <p>
                By signing or clicking “I Acknowledge” on our website as part of
                the booking process, you hereby agree to the following terms and
                conditions, on behalf of yourself and all members of your
                traveling party. These terms and conditions form an agreement
                between you and Vertical Fleet, Inc. (“we”, “our”, or “us”)
              </p>
              <br />
              <br />
              <p className="font-bold">1. RESPONSIBILITY</p>
              <p>
                We act only as an agent for the airlines and other suppliers of
                travel services shown on your itinerary. We are not responsible
                for the acts or omissions of such suppliers or their
                subcontractors or their failure to provide services, adhere to
                their own schedules, or honor their contracts. Nor are we
                responsible for any omissions, delays, failures to make
                connections, re-routings, or acts of any governmental authority,
                or for damage and/or delay due to causes beyond our control such
                as labor disputes, bankruptcy, defaults, mechanical breakdowns,
                pandemics, epidemics, quarantines, government restraints,
                weather problems, volcanic activity, earthquakes, terrorism, or
                threat of terrorism. Each supplier has its own terms and
                conditions that are applicable to your particular arrangements
                in addition to this Agreement.
                <br />
                <br />
                Airline tickets are subject to the published conditions of
                carriage and rules, including but not limited to cancellation
                policies, of the applicable airline. The contract of carriage in
                use by the applicable airline, when issued, shall be between the
                applicable airline and passenger. Airlines retain the right to
                adjust flight times and schedules at any time. Airlines may also
                in their discretion change or cancel flights or itineraries.
                Please review the applicable carrier’s contract of carriage.
                <br />
                <br />
                <p className="font-bold">
                  We do not provide cash or credit card refunds under any
                  circumstances. You will not receive any refund if you change
                  or cancel your booking. Some tickets may be non-changeable and
                  non-cancellable.
                  <br />
                  <br />
                  If the airline cancels or reschedules your flight, or fails to
                  honor your ticket for any reason, we will extend a credit
                  toward a future trip of equal or greater value to the same
                  geographical region in our sole discretion. The foregoing is
                  our sole responsibility in connection with the airline’s
                  cancellation or rescheduling of any trip, or the airline’s
                  failure to honor a ticket.
                  <br />
                  <br />
                  Some airlines may require your credit card to be present at
                  check-in. This may require us to use your credit card directly
                  with the airline for taxes and fees. In the event your credit
                  card is used directly with the airline we will refund the
                  equivalent amount back to your card. You will not pay anything
                  more than the total we have quoted you upon check out.
                </p>
              </p>
              <br />
              <p className="font-bold">
                2. FOREIGN ENTRY REQUIREMENTS AND HAZARDS
              </p>
              <p>
                We have no special knowledge regarding foreign entry
                requirements, unsafe conditions, terrorism, health hazards,
                weather hazards, supplier bankruptcies, or the suitability for a
                disabled person of any portion of any trip. For information
                concerning possible dangers at destinations, we recommend going
                to the State Department travel website at www.travel.state.gov.
                For information about passports and visas, and possible dangers
                at your destinations, go to:
                https://travel.state.gov/content/travel.html, click on "Find
                International travel Information” then click on "Country
                Information", and fill in the name of the destination country.
                For medical and health information, we recommend contacting the
                Centers for Disease Control at (877) FYI-TRIP or
                www.cdc.gov/travel. You assume full and complete responsibility
                for checking and verifying any and all passport, visa,
                vaccination, or other entry requirements of your destination and
                your connecting points, and all conditions regarding health,
                safety, security, political stability, and labor or civil unrest
                at such destination. Many countries require your passport to be
                valid for six months beyond the date of entry. <br />
                <br />
              </p>
              <p className="font-bold">3. TICKETING AND EXCHANGE FEES</p>
              <p>
                It may be possible to exchange a booked ticket for a later date
                and/ or different route, or cancel it for future credit.
                <br />
                <br />
                Availability of exchange or cancellation will be determined upon
                your request to our support team. Please use the Support link on
                our site to fill out the relevant form and request an exchange/
                cancellation, if you so require.
                <br />
                <br />
                Our representatives will contact you and advise if an exchange/
                cancellation is possible for your ticket at the time of your
                request and what the terms and cost of that will be. Our
                representatives' quotes are valid at the time of sending, but
                subject to change.
                <br />
                <br />
                Quotes for the exchange of a booked ticket, when available, may
                include a fee and/ or a fare difference, which will be
                determined at the time of request. Quotes for the cancellation
                of a booked ticket, when available, may include a cancellation
                fee or a penalty in the form of deduction from credit, which
                will be determined at the time of request.
                <br />
                <br />
                Name changes are never permitted, be it an exchange or a
                cancellation request. Once a ticket has been booked under the
                name of a certain passenger, this passenger will be the sole
                individual allowed to travel by using any value that resides
                with this ticket.
                <br />
                <br />
                Exchanges are not allowed within 24 hours of departure and
                cancellations are not allowed within 48 hours of departure. We
                are happy to still take your request and seek an exception case
                by case, but this would be by courtesy and is not guaranteed.
                <br />
                <br />
                Any basic economy fare on our site is always non-cancellable and
                non-changeable.
                <br />
                <br />
              </p>
              <p className="font-bold">
                4. TICKETING, PRICE CHANGES AND MISSED FLIGHTS
              </p>
              <p>
                For all trips, you must have made full payment before we release
                the tickets or documents.
                <br />
                <br />
                You acknowledge and understand that airlines can increase their
                prices at any time before tickets are issued. You hereby consent
                to any such price increases and authorize your credit card to be
                used for them.
                <br />
                <br />
                If you miss your flight, missed flights are not refundable, and
                changes or replacement flights will be at the discretion of the
                airline. In some cases, we may be able to help you, but in most
                cases, you will not be provided with a replacement flight unless
                the airline itself allows it. If all or any portion of an
                itinerary is not used for any reason, full payment is forfeited.
                <br />
                <br />
                If you miss your flight because you inadvertently provided us
                with an incorrect email address at time or purchase and did not
                receive your booking confirmation email, which serves as your
                electronic ticket, we will not provide a refund or credit.
                <br />
                <br />
              </p>
              <p className="font-bold">5. SCHEDULE CHANGES AND FLIGHT DELAYS</p>
              <p>
                Schedule changes are quite common today. We urge you to re-check
                exact flight times prior to departure and prior to your return.
                Flight delays are also common today. If your domestic flight or
                your US-originating foreign flight on a US airline is delayed
                for any reason, the airlines are not required by law to
                compensate you or pay for your enroute expenses, such as meals,
                hotels, taxes and phone calls. WE STRONGLY RECOMMEND TRAVEL
                INSURANCE FOR ALL YOUR TRAVEL PLANS.
                <br />
                <br />
              </p>
              <p className="font-bold">6. CHECK YOUR ITINERARY</p>
              <p>
                As soon as you receive your booked itinerary, check it
                thoroughly to make sure it is correct as to dates, times, fares,
                and rates. We recommend that you check your itinerary
                periodically and take note of any schedule changes. We have no
                responsibility for losses and inconvenience arising from your
                failure to check your itinerary prior to your departure date.{" "}
                <br />
                <br />
                Our booking engine searches among hundreds of specials from
                dozens of different providers to find best deal available
                anywhere online. Sometimes the discounted package may include a
                car, a hotel, or an extra flight. These add-ons allow us to
                maximize deal value, and are there for you to use if you so
                choose. They do not affect your flights in any way.
                <br />
                <br />
                If you have any questions or concerns about your itinerary, or
                if your ticket is not honored for any reason, you must contact
                us immediately. DO NOT CONTACT THE AIRLINE DIRECTLY. Direct
                contact with any third-party, including the airlines on which
                your travel is booked, may result in cancellation of your
                booking. If your ticket is not honored while you are at the
                airport before you board your flight, we will replace your
                ticket with an acceptable alternative of equal value or more
                within 24 hours.
                <br />
                <br />
              </p>
              <p className="font-bold">7. FREQUENT TRAVELER POINTS AND MILES</p>
              <p>
                Frequent traveler points or miles, upgrades, certificate
                vouchers and other discounts or incentives may not apply to all
                flights, hotel stays, or other travel services. Some of our
                tickets may be booked using points, and do not qualify for
                mileage accrual. Certain tickets may require us to create an
                award account in your name. Please refer to the checkout page
                for eligibility and award accrual on your selected itinerary.
                Users will be prompted for a frequent flyer number on all
                eligible itineraries.
                <br />
                <br />
              </p>
              <p className="font-bold">
                8. BOOKING FRAUD AND NON-USE OF FLIGHT SEGMENTS
              </p>
              <p>
                You agree you will only use our website or services to make
                legitimate reservations or purchases and shall not make
                speculative, false or fraudulent reservations or reservations in
                anticipation of demand. You will only use our website and
                services in compliance with applicable law. You agree not to
                purchase a ticket or tickets containing flight segments that you
                will not be using, such as a "point-beyond", "hidden-city", or
                "back-to-back tickets". You further agree not to purchase a
                round-trip ticket that you plan to use only for one-way travel.
                You acknowledge that the airlines generally prohibit all such
                tickets, and therefore we do not guarantee that the airline will
                honor your ticket or tickets. If you do not use one of the
                flights in your reservation, the airline will cancel your
                remaining itinerary. You agree to indemnify us against airline
                claims for the difference between the full fare of your actual
                itinerary and the value of the ticket or tickets that you
                purchased.
                <br />
                <br />
              </p>
              <p className="font-bold">9. HOTELS AND OTHER ACCOMMODATIONS</p>
              <p>
                All hotel and other accommodation bookings are prepaid,
                non-refundable, non-transferable, and non-cancellable. <br />
                <br />
              </p>
              <p className="font-bold">10. FOREIGN CURRENCY</p>
              <p>
                Purchases made on this website are transacted exclusively in
                United States Dollars (USD). If you make a purchase from us
                using a non-USD-denominated credit or debit card, please be
                aware that, due to the constant fluctuation in exchange rates,
                the charge to your card or the estimated charge amount we
                provide you, may differ based on the exchange rate at the time
                you make your reservation versus the rate at the time the charge
                is reflected on your credit card statement. Also, in the event
                that we must credit your account, we will refund the exact USD
                amount initially charged and will not be responsible for any
                fluctuations in exchange rates which may cause differences in
                your billing statement.
                <br />
                <br />
              </p>
              <p className="font-bold">11. CREDIT CARD PAYMENTS</p>
              <p>
                When you submit your credit or debit card for a purchase, we
                request an authorization for the amount of your anticipated
                transaction (placing a temporary "hold" on the funds). If for
                some reason we are unable to confirm your booking, you will not
                be charged and we will request that such hold be released by
                your credit or debit card bank; until then, funds subject to the
                hold will not be available to you for other purposes. We bear no
                responsibility in the event your credit or debit card is not
                approved or charged.
                <br />
                We use stringent safety measures for credit card payment
                processing. Fraudulent transactions, if any, are reported to
                airport security, airlines, and other federal and state law
                enforcement.
                <br />
                You agree to be liable for any and all credit card payments.
                Please do not dispute the entire credit card charge or initiate
                a chargeback due to any act or omission of any airline or other
                supplier; otherwise, we will have to absorb a big loss. If a
                supplier does not provide the service or ceases operations, your
                recourse is against the supplier, not us. <br />
                Most credit card transactions over the phone to our Customer
                Service Department are recorded and are available as evidence in
                case of any dispute. When certain transactions are determined to
                be high risk by our systems, we will not process such
                transactions unless our credit card verification team has
                determined that it is safe to process them. In order to
                establish validity of such transactions, we may contact you or
                your bank. As our client, you hereby appoint us to be your
                attorneys-in-fact for the purpose of signing all documents
                necessary to purchase and issue airline tickets, tours, cruises,
                and hotel guarantees for late arrival. You authorize any of the
                attorneys-in-fact to sign credit card authorizations for said
                purchases whenever any of them receives an Internet booking
                request reasonably believed to be from you or someone acting on
                your behalf, requesting those tickets be charged to this credit
                card account.
                <br />
                You agree that you will pay for all such purchases and will not
                hold us responsible for any of our actions pursuant to this
                power of attorney. At our request, at any time before or after
                your trip, you agree to sign a credit card charge form and to
                send us any proof of your identity that we may require. If we
                suspect that an attempted charge is fraudulent, we retain the
                right to void the transaction immediately.
                <br />
                Advertised airfares and hotel prices are inclusive of all taxes
                and fees. However, because a supplier may separate taxes and
                fees, you may see charges on your credit card from both these
                suppliers and us. Please contact us for additional information
                if you have questions.
                <br />
                <br />
              </p>
              <p className="font-bold">
                12. YOUR ACCESS AND USE OF OUR SERVICES
              </p>
              <p>
                Your right to access and use our Services is personal to you and
                is not transferable by you to any other person or entity. You
                are only entitled to access and use our Services for lawful
                purposes and pursuant to the terms and conditions of this
                Agreement and the Privacy Policy.
                <br />
                Your access and use of our Services may be interrupted from time
                to time for any of several reasons, including, without
                limitation, the malfunction of equipment, periodic updating,
                maintenance or repair of our Services or other actions that we,
                in our sole discretion, may elect to take. We reserve the right
                to suspend or discontinue the availability of our Services
                and/or any portion or feature of our Services at any time in our
                sole discretion and without prior notice. Your searching may
                also be throttled; to avoid traffic congestions and if we deem
                your behavior abusive to our internal systems or your use of our
                platform is being misappropriated for enterprise purposes.
                <br />
                Any action by you that, in our sole discretion: (i) violates the
                terms and conditions of this Agreement and/or the Privacy
                Policy; (ii) restricts, inhibits or prevents any access, use or
                enjoyment of our Services; or (iii) through the use of our
                Services, defames, abuses, harasses, offends or threatens, shall
                not be permitted, and may result in your loss of the right to
                access and use our Services. You shall not modify, scrape,
                embed, or frame our Services without our prior written
                permission.
                <br />
                To enable and its associated business, Award Logic Inc, to
                provide the Services to and for you, you authorize and/or its
                associated business to contact those carriers’, and other
                related entities’ sites, in order to access and/or create
                necessary frequent flyer accounts under your name which contain
                data necessary or convenient to provide you the Services as you
                request.
                <br />
                <br />
                You agree that you will not use any robot, spider, scraper, deep
                link or other similar automated data gathering or extraction
                tools, program, algorithm or methodology to access, acquire,
                copy or monitor our Services or any portion of our Services or
                for any other purpose, without our prior written permission.
                Additionally, you agree that you will not: (i) take any action
                that imposes, or may impose in our sole discretion an
                unreasonable or disproportionately large load on our
                infrastructure; (ii) copy, reproduce, modify, create derivative
                works from, distribute or publicly display any content (except
                for your personal information) from our Services without our
                prior written permission and the appropriate third party, as
                applicable; (iii) interfere or attempt to interfere with the
                proper working of our Services or any activities conducted on
                our Services; or (iv) bypass any robot exclusion headers or
                other measures we may use to prevent or restrict access to our
                Services. Notwithstanding the foregoing, we grant the operators
                of public search engines permission to use spiders to copy
                materials from our Services for the sole purpose and solely to
                the extent necessary for creating publicly available search
                indices of the materials on our Services, but not caches or
                archives of such materials. We reserve the right to revoke these
                exceptions either generally or in specific cases. Except as
                expressly permitted in this Agreement, you shall not collect or
                harvest any personally identifiable information, including
                account names, from our Services. You shall not use any
                communication systems provided on our Services (such as Forums
                or email) for any commercial or solicitation purposes. You shall
                not solicit for commercial purposes any users of our Services
                without our prior written permission.
                <br />
                <br />
                There may be provided on our Services links or access to other
                websites or mediums belonging to our advertisers, business
                partners, affiliates, Service Providers and other third parties.
                Such links and access do not constitute our endorsement of those
                third parties, nor the products or services of those third
                parties. We are not responsible for the activities or policies
                of those third parties. We do not guarantee that the terms or
                rates offered by any particular advertiser, business partner,
                affiliate, Service Provider or other third party on or through
                our Services are the best terms or lowest rates available in the
                market.
                <br />
                <br />
              </p>
              <p className="font-bold">13. WARRANTY DISCLAIMER</p>
              <p>
                THE WEBSITE AND ALL ELEMENTS THEREOF ARE PROVIDED ON AN "AS IS"
                BASIS WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE
                DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT
                LIMITATION IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
                A PARTICULAR PURPOSE. WE DO NOT WARRANT THAT THE FUNCTIONS
                CONTAINED IN THE WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE,
                THAT DEFECTS WILL BE CORRECTED, OR THAT THE WEBSITE OR THE
                SERVER THAT IT MAKES AVAILABLE ARE FREE OF VIRUSES OR OTHER
                HARMFUL COMPONENTS. WE DO NOT ENDORSE, WARRANT, OR MAKE ANY
                REPRESENTATIONS REGARDING THE ACCURACY OR RELIABILITY OF ANY OF
                THE INFORMATION, PROMOTIONS, AND ADVERTISEMENTS ON THIS SITE (OR
                SENT TO YOU VIA E-MAIL) PROVIDED BY, ACCESSED FROM, DOWNLOADED
                FROM, EXTRACTED FROM, OR OTHERWISE ORIGINATING FROM PERSONS,
                ENTITIES, OR OTHER THIRD-PARTIES, INCLUDING, WITHOUT LIMITATION,
                OUR USERS, TRAVEL AUTHORS AND EXPERTS, THIRD-PARTY WEBSITES,
                DATABASES, TRAVEL AGENTS, VENDORS, AND MERCHANTS. YOU
                ACKNOWLEDGE AND AGREE THAT SUCH INFORMATION, PROMOTIONS, AND
                ADVERTISEMENTS MAY NOT BE ACCURATE, CORRECT, OR UP-TO-DATE. YOU
                (AND NOT WE) ASSUME THE RISK THAT SUCH INFORMATION IS INCORRECT.
                WE HAVE. NO RESPONSIBILITY TO (AND ARE NOT LIABLE FOR FAILURE
                TO) CHECK THE ACCURACY THEREOF PRIOR TO MAKING SUCH THIRD-PARTY
                INFORMATION AVAILABLE TO YOU. WE DO NOT ENDORSE, WARRANT, OR
                MAKE ANY REPRESENTATIONS REGARDING THE QUALITY OF ANY PRODUCT,
                SERVICE, INFORMATION OR MATERIAL OBTAINED BY YOU FROM
                THIRD-PARTIES, INCLUDING ANY STATEMENTS, OPINIONS,
                REPRESENTATIONS, WARRANTIES, OR RECOMMENDATIONS. SOME
                JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES, SO
                THE ABOVE LIMITATION MAY NOT APPLY TO YOU. WE DO NOT ENDORSE,
                WARRANT, OR MAKE ANY REPRESENTATIONS WITH RESPECT TO ANY OF THE
                PRODUCTS YOU MAY PURCHASE FROM A THIRD-PARTY VENDOR OR WEBSITE
                THROUGH THE WEBSITE. THE FOREGOING SHALL BE ENFORCEABLE TO THE
                MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
                <br />
                <br />
              </p>
              <p className="font-bold">14. CORRECTION OF ERRORS</p>
              <p>
                The information published on this website may include
                inaccuracies or errors, including pricing errors. We do not
                guarantee the accuracy of, and disclaim all liability for, any
                errors or other inaccuracies relating to the information and
                description of the travel products displayed on this website
                (including, without limitation, the pricing, photographs, lists
                of hotel amenities, and general product descriptions), much of
                which information is provided by our suppliers. In addition, we
                expressly reserve the right to correct any pricing errors on our
                website and/or on pending reservations made under an incorrect
                price. In such event, if available, we will offer you the
                opportunity to keep your pending reservation at the correct
                price or we will cancel your reservation without penalty.
                <br />
                <br />
              </p>
              <p className="font-bold">15. LIMITATION OF LIABILITY</p>
              <p>
                UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL OR EQUITABLE THEORY,
                WHETHER TORT, CONTRACT, OR OTHERWISE, SHALL WE BE LIABLE TO YOU
                OR ANY OTHER PERSON FOR ANY INDIRECT, SPECIAL, INCIDENTAL,
                PUNITIVE OR CONSEQUENTIAL DAMAGES OF ANY CHARACTER INCLUDING,
                WITHOUT LIMITATION, DAMAGES FOR LOST DATA, COMPUTER FAILURE OR
                MALFUNCTION, DISRUPTION OR CANCELLATION OF TRAVEL PLANS, OR ANY
                AND ALL OTHER DAMAGES OR LOSSES. SOME STATES OR JURISDICTIONS DO
                NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR
                CONSEQUENTIAL DAMAGES, SO THIS MAY NOT APPLY TO YOU. THE
                LIMITATION OF LIABILITY CONTAINED IN THESE TERMS & CONDITIONS
                DOES NOT APPLY TO YOU FOR DAMAGES ARISING OUT OF OUR NEGLIGENCE
                OR WILLFUL MISCONDUCT OR ANY OTHER CAUSE OF ACTION ARISING FROM
                OUR ACTS BUT DOES APPLY TO THE ACTS OR OMISSION OF OTHERS. OUR
                AGGREGATE LIABILITY FOR ALL CLAIMS UNDER ANY CIRCUMSTANCES WILL
                NOT EXCEED $1,000.00 OR YOUR ACTUAL, OUT-OF-POCKET COSTS AND
                DAMAGES. IN NO EVENT SHALL WE BE LIABLE FOR LOST PROFITS,
                SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES.
                <br />
                <br />
              </p>
              <p className="font-bold">16. COMPLIANCE WITH LAWS</p>
              <p>
                Unless otherwise specified, the materials on the website are
                presented solely for the purpose of promoting and its services
                within the United States, its territories, possessions and
                protectorates. We make no representation that materials on the
                website are appropriate or available for use in other locations
                outside the United States. Neither the website nor any
                underlying information or technology may be downloaded or
                otherwise exported or re-exported (i) into (or to a national or
                resident of ) Cuba, Iran, Iraq, Libya, North Korea, Sudan, Syria
                or any other country to which the United States has embargoed
                goods; or (ii) to anyone on the U.S. Treasury Department's list
                of Specially Designated Nations or the U.S. Commerce
                Department's Table of Denial Orders. By downloading or using any
                element of the website you are agreeing to the foregoing and you
                are certifying that you are not located in, under the control
                of, or a national or resident of any such country or on any such
                list. In addition, you are responsible for complying with any
                and all local laws in your jurisdiction which may impact your
                right to use the website.
                <br />
                <br />
              </p>
              <p className="font-bold">17. OWNERSHIP RIGHTS</p>
              <p>
                This website is owned and operated by us. The website is
                protected by United States copyright law and international
                treaty provisions. You should assume that everything you see,
                read, or hear on this website and third-party websites is
                copyrighted. You acknowledge that no title to the intellectual
                property on the website is transferred to you. No material from
                the website may be copied, reproduced, republished, uploaded,
                posted, transmitted or distributed in any way, except that you
                may download one copy of the materials on any single computer
                for your personal, non-commercial use only, provided that you
                keep intact all copyright and other proprietary notices
                appearing on such materials. You may not modify, or create
                derivative works based upon the website or materials contained
                therein, in whole or in part. In the event you download software
                from the website, the software, including any files, images and
                data incorporated therein, are licensed to you by us. The
                collection, organization, and presentation of information and
                materials from this website and other linked sites are protected
                under applicable intellectual property laws. The trademarks,
                service marks, trade names and logos on this website and
                third-party sites are our intellectual property, whether
                registered or unregistered, and other third parties. All rights
                not expressly licensed hereunder are reserved by us or the
                respective property owners.
                <br />
                <br />
              </p>
              <p className="font-bold">18. PROHIBITED USE</p>
              <p>
                You agree not to use this website for any purpose that is
                unlawful or prohibited by these Terms and you agree to respect
                other users of this website. You violate our acceptable use
                policy when, in addition to any violation of the terms
                previously mentioned, you, your affiliates, representatives, or
                subsidiaries engage in any of the following prohibited
                activities:
                <br />
                * posting, publishing, transmitting, advertising, or displaying
                on this website or otherwise making available child pornography,
                or materials that may be considered profane, offensive, obscene,
                defamatory or otherwise inappropriate;
                <br />* using this website for the purposes of spamming (i.e.
                distribution of unsolicited and unauthorized advertisements or
                other commercial materials);
                <br />* defaming, abusing, harassing, stalking, threatening, or
                otherwise violating the legal rights, including but not limited
                to privacy rights, of others;
                <br />* purposefully or recklessly posting, publishing, or
                otherwise making available on the website incorrect or
                inaccurate information;
                <br />* using this website in violation of intellectual property
                rights, or rights of privacy or publicity, of others; or
                <br />* uploading files that contain viruses, corrupted files,
                worms, Trojan horses, or other software or programs with similar
                effects that may damage, delay, or disrupt the operation of
                another's computer, computer network, or other related
                equipment, or distributing information regarding the creation or
                use of viruses, worms, Trojan horses, pinging, mail bombing or
                denial-of-service attacks.
                <br />
                <br />
              </p>
              <p className="font-bold">19. NO AGENCY OR PARTNERSHIP</p>
              <p>
                No relationship between us and any third parties, including but
                not limited to travel agents, travel experts, writers, and our
                users, whether or not they share in our revenues and/or profits,
                who post, publish, view, receive, or utilize information and/or
                materials in this website shall be construed as establishing
                agency, employment, partnership, joint venture or any other
                relationship giving rise to vicarious liability.
              </p>
              <p className="font-bold">
                20. GOVERNING LAW, DISPUTE RESOLUTION, AND EXCLUSIVE
                JURISDICTION
              </p>
              <p>
                The parties agree to attempt to settle any dispute arising under
                this Agreement through good-faith consultations and
                negotiations. In the event that an informal resolution of a
                dispute is not reached, then the Parties agree that this
                Agreement shall be governed by the laws of the State of
                California without regard to its conflicts of laws principles.
                If any provision of this Agreement is found to be invalid,
                illegal or unenforceable, the enforceability of the remaining
                provisions will not in any way be affected or impaired. YOU
                HEREBY CONSENT TO THE EXCLUSIVE JURISDICTION AND VENUE OF COURTS
                IN SAN FRANCISCO COUNTY, CALIFORNIA, USA, IN ALL DISPUTES
                ARISING OUT OF OR RELATING TO THIS AGREEMENT. The prevailing
                party shall be entitled to reasonable attorney’s fees.
                <br />
                <br />
              </p>
              <p className="font-bold">21. MISCELLANEOUS</p>
              <p>
                If for any reason a court of competent jurisdiction finds any
                provision of these Terms, or portion thereof, to be invalid or
                unenforceable, that provision will be enforced to the maximum
                extent permissible to effectuate the intent of this Agreement,
                and the remainder of these Terms shall continue in full force
                and effect. You warrant that you possess all legal authority to
                use this website in accordance with these Terms. These Terms, in
                addition to the Privacy Policy available in this website,
                constitute the entire understanding and agreement between you
                and us with respect to all matters relating in any way to the
                use of this website. We reserve the right to change these Terms,
                delete terms or add new terms. It is your responsibility to
                check these Terms periodically. Your continued use after
                changes, deletions, or additions have been made shall constitute
                your acceptance thereof. These Terms are personal to you, and
                you may not assign these Terms or your rights or obligations
                there under to a third party without our prior express written
                consent. Our rights under these Terms may be assigned, and its
                duties may be delegated. You consent to our recording of phone
                calls for quality control and fraud-prevention purposes. Any
                rights not expressly granted herein are reserved. <br />
                <br />
              </p>
              <p className="font-bold">22. SERVICE HELP</p>
              <p>
                For quick answers to your questions email
                customerservice@verticalfleet.com
                <br />
                You may also write to us at:
                <br />
                Customer Service
                <br />
                1810 E Sahara Ave Ste 212 #2180
                <br />
                Las Vegas, Nevada 89104
                <br />
                <br />
                Revised May 2022
                <br />
                ©2022 Vertical Fleet, Inc. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default TermsModal;
