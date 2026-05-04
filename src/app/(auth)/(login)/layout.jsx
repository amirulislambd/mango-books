import React from 'react';
export const metadata = {
  title: "Login | MangoBooks",
  description: "Access your MangoBooks account to manage your library, track reading progress, and explore premium books.",
  openGraph: {
    title: "Login to MangoBooks",
    description: "Welcome back! Log in to continue your reading journey.",
  },
};
const layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default layout;