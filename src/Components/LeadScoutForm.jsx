import { useEffect } from "react";
import Navbar from "./Navbar";

const LeadScoutForm = () => {
  useEffect(() => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("source");
    const amount = urlParams.get("amount");
    const id = urlParams.get("id");
    const affiliate_sub1 = urlParams.get("affiliate_sub1");
    const affiliate_sub2 = urlParams.get("affiliate_sub2");
    const affiliate_sub5 = urlParams.get("affiliate_sub5");

    console.log(source,affiliate_sub1)

    // Configure the LeadScout form
    const leadScoutFormConfig = {
      affiliateCode: id || "kX4p3tPa",
      formId: "1",
      overrides: {
        requestedAmount: {
          max: 2500,
          min: 100,
          step: 100,
        },
      },
      language: "en",
      defaultValues: {
        requestedAmount: Number(amount) ? Number(amount) : null,
      },
      styles: {
        primary: {
          main: "#2A6877",
          dark: "#2A6877",
          contrastText: "#ffffff",
        },
      },
      theme: "light",
      extra: {
        affiliate_sub1: affiliate_sub1 || "365",
        affiliate_sub2: affiliate_sub2 || "org",
        affiliate_sub5: affiliate_sub5 || null,
        aff_utm_source: source || "",
      },
      conversion: source === "fb" ? { type: "FACEBOOK" } : {},
    };

    // Load the form after the LeadScout script is available
    window.LeadScout = window.LeadScout || {};
    window.LeadScout.onLoad = function () {
      window.LeadScout.init(
        document.getElementById("lead-scout-form"),
        leadScoutFormConfig
      );
    };

    // Load the external script dynamically
    const script = document.createElement("script");
    script.src = "https://app.leadscout.ca/library/library.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
    <Navbar className="mb-[350px]"/>
    <div
      id="lead-scout-form"
      className="mt-[50px]"
      style={{
        minHeight: "450px",
        maxWidth: "800px",
        margin: "0 auto",
        boxShadow: "4px 4px 0px 1px #3a3a3a",
        border: "solid 1px #3a3a3a",
        fontFamily:"Outfit"
      }}
    ></div>
    </div>
  );
};

export default LeadScoutForm;
