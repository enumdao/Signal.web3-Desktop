// Copyright 2021-2022 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';

import type { LocalizerType } from '../types/Util';
import { useEscapeHandling } from '../hooks/useEscapeHandling';
import { useTheme } from '../hooks/useTheme';
import { TitleBarContainer } from './TitleBarContainer';
import type { ExecuteMenuRoleType } from './TitleBarContainer';

export type PropsType = {
  closeAbout: () => unknown;
  environment: string;
  i18n: LocalizerType;
  version: string;
  platform: string;
  isWindows11: boolean;
  executeMenuRole: ExecuteMenuRoleType;
};

export const About = ({
  closeAbout,
  i18n,
  environment,
  version,
  platform,
  isWindows11,
  executeMenuRole,
}: PropsType): JSX.Element => {
  useEscapeHandling(closeAbout);

  const theme = useTheme();

  return (
    <TitleBarContainer
      platform={platform}
      isWindows11={isWindows11}
      theme={theme}
      executeMenuRole={executeMenuRole}
    >
      <div className="About">
        <div className="module-splash-screen">
          <div className="module-splash-screen__logo module-img--150" />

          <div className="version">{version}</div>
          <div className="environment">{environment}</div>
          <div>
            <a href="https://github.com/enumdao/Signal.web3-Desktop/">
              Signal.web3 Desktop
            </a>
          </div>
          <br />
          <div>
            <a
              className="acknowledgments"
              href="https://github.com/enumdao/Signal.web3-Desktop/blob/main/ACKNOWLEDGMENTS.md"
            >
              {i18n('softwareAcknowledgments')}
            </a>
          </div>
          <div>
            <a
              className="privacy"
              href="https://hail-wisteria-c3e.notion.site/Signal-web3-Terms-of-Service-3a24079a36d64da0875eab8ec402e626"
            >
              {i18n('privacyPolicy')}
            </a>
          </div>
        </div>
      </div>
    </TitleBarContainer>
  );
};
