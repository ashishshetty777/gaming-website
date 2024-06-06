import { useEffect } from "react";
export default function HubSpotForm() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: '46376393',
                    formId: "562aa2f1-f49a-49da-af59-81c838a33457",
                    target: '#hubspotForm'
                });
            }
        });
    }, []);

    return (
        <div id="hubspotForm" className="hubspotForm"></div>
    );
}