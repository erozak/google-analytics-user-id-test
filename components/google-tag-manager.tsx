"use client";

import * as React from 'react';
import { GoogleTagManager as NextGoogleTagManager, sendGTMEvent } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';

export interface GoogleTagManagerProps {
  containerId?: string;
  userId?: string;
}

export function GoogleTagManager({ containerId, userId }: GoogleTagManagerProps) {
  const configRef = React.useRef<Record<string, string | undefined>>({});

  React.useEffect(() => {
    if (!containerId) return;

    const config: Record<string, string | undefined> = {
      user_id: userId,
    };


    if (
      Object.keys(config).length === Object.keys(configRef.current).length &&
      Object.entries(config).every(([key, value]) => configRef.current[key] === value)
    ) {
      return;
    }

    console.log('Update GTM config', config)

    window.dataLayer ||= [];
    window.dataLayer.push(config);

    configRef.current = config;
  }, [userId]);


  if (!containerId) return null;

  return (<><PathnameChangeHandler /><NextGoogleTagManager gtmId={containerId} /></>);
}


function PathnameChangeHandler() {
  const pathname = usePathname();

  const pathnameRef = React.useRef<string>();

  React.useEffect(() => {
    if (pathnameRef.current === pathname) return;

    sendGTMEvent({
      event: 'page_view',
      page: pathname,
      page_location: window.location.href,
    });

    pathnameRef.current = pathname;
  }, [pathname]);

  return null;

}
