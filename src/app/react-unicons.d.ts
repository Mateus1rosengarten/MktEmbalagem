declare module '@iconscout/react-unicons' {
    import React from 'react';
  
    // Declare a generic icon component type; expand as needed
    export interface IconProps {
      color?: string;
      size?: string | number;
      // Add any other props you know Unicons supports
    }
  
    export const UilClock: React.FC<IconProps>;
    export const UilLocationPinAlt: React.FC<IconProps>;
    export const UilEnvelopes: React.FC<IconProps>;
    export const UilIncomingCall: React.FC<IconProps>;
    export const UilCircle: React.FC<IconProps>;
    export const UilEdit:React.FC<IconProps>;
    export const UilChatBubbleUser:React.FC<IconProps>;
    // Add more icon exports here as needed
  }
  