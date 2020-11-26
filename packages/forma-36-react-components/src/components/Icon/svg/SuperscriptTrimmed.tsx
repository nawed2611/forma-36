import * as React from 'react';

function SvgCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 13 18" {...props}>
        <path d="M16.018 24.446v2.982h-4.429l-2.839-4.5-0.429-0.75c-0.107-0.125-0.161-0.25-0.196-0.375h-0.054c-0.036 0.125-0.107 0.25-0.161 0.375-0.107 0.214-0.268 0.5-0.446 0.786l-2.768 4.464h-4.607v-2.982h2.286l3.518-5.196-3.304-4.857h-2.446v-3h4.929l2.482 4.071c0.161 0.25 0.286 0.518 0.411 0.75 0.107 0.125 0.161 0.25 0.196 0.375h0.054c0.036-0.125 0.107-0.25 0.196-0.375l0.446-0.75 2.5-4.071h4.589v3h-2.232l-3.286 4.768 3.643 5.286h1.946zM27.393 12.321v3.679h-9.179l-0.054-0.482c-0.036-0.25-0.071-0.589-0.071-0.821 0-4.875 6.25-5.286 6.25-7.875 0-0.929-0.839-1.554-1.786-1.554-0.679 0-1.286 0.321-1.732 0.696-0.232 0.196-0.446 0.446-0.643 0.679l-1.875-1.643c0.321-0.446 0.679-0.821 1.125-1.179 0.75-0.589 1.839-1.161 3.357-1.161 2.589 0 4.393 1.518 4.393 3.893 0 4.286-5.929 4.643-6.179 7.196h4.143v-1.429h2.25z"/>
    </svg>
  );
}

export default SvgCode;
