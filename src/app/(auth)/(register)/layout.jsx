import React from 'react';
export const metadata = {
    title: "Join MangoBooks | Create Your Account",
    description: "Create a free MangoBooks account today and start building your personal digital library with thousands of titles.",
    openGraph: {
      title: "Sign Up for MangoBooks",
      description: "Be a part of our growing community of book lovers and developers.",
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