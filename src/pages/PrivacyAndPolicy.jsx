import React from "react";

const PrivacyAndPolicy = () => {
  return (
    <div className="prose max-w-4xl mx-auto mt-40 pb-10 px-10">
      <h1 className="text-neutral-500">Privacy policy</h1>
      <div>
        <h2 className="text-neutral-500">1. Personal Data Collection</h2>
        <p>
          We collect several types of information for various purposes to
          provide and improve our Service to you. The types of information we
          collect include:
        </p>
        <div className="ml-5">
          <h3 className="text-neutral-500">Personal Data</h3>
          <p>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you (“Personal Data”). Personally identifiable information
            may include, but is not limited to, your name, email address, phone
            number, and IP address.
          </p>
        </div>
        <div className="ml-5">
          <h3 className="text-neutral-500">Usage Data</h3>
          <p>
            We may also collect information on how the Service is accessed and
            used (“Usage Data”). This Usage Data may include information such as
            your computer’s Internet Protocol address (e.g., IP address),
            browser type, browser version, the pages of our Service that you
            visit, the time and date of your visit, the time spent on those
            pages, unique device identifiers and other diagnostic data.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-neutral-500">2. Data Collection Methods</h2>
        <p>
          We use cookies and similar tracking technologies to track the activity
          on our Service and hold certain information. We collect this data
          through forms, cookies, and pixels.
        </p>
      </div>
      <div>
        <h2 className="text-neutral-500">3. Use of Data</h2>
        <p>The AI Agency uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </li>
          <li>To provide customer support</li>
          <li>
            To gather analysis or valuable information so that we can improve
            our Service
          </li>
          <li>To monitor the usage of our Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
      </div>
      <div>
        <h2 className="text-neutral-500">4. Data Retention</h2>
        <p>
          We will retain your Personal Data only for as long as is necessary for
          the purposes set out in this Privacy Policy. We will retain and use
          your Personal Data to the extent necessary to comply with our legal
          obligations (for example, if we are required to retain your data to
          comply with applicable laws), resolve disputes, and enforce our legal
          agreements and policies.
        </p>
      </div>
      <div>
        <h2 className="text-neutral-500">5. Data Security</h2>
        <p>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security. Our website is SSL protected.
        </p>
      </div>
      <div>
        <h2 className="text-neutral-500">6. Your Data Protection Rights</h2>
        <p>
          If you wish to be informed what Personal Data we hold about you and if
          you want it to be removed from our systems, please contact us at{" "}
          <a href="mailto:hello@theaiagency.io">hello@theaiagency.io</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
