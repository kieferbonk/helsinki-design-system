import React from 'react';

import { StatusLabel } from './StatusLabel';
import { Notification } from '../notification/Notification';
import { IconCheckCircle, IconInfoCircle, IconAlertCircle, IconError } from '../../icons';

export default {
  component: StatusLabel,
  title: 'Components/StatusLabel',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const deprecatedInfo = () => {
  return (
    <Notification label="Breaking change" className="siteNotification" type="alert">
      The default rectangular status labels are deprecated. The rounded cornered variant will replace the default
      rectangular StatusLabel in the next major release.
    </Notification>
  );
};

export const Neutral = () => {
  return (
    <>
      {deprecatedInfo()}
      <br />
      <StatusLabel>Neutral</StatusLabel>
    </>
  );
};

export const Info = () => {
  return (
    <>
      {deprecatedInfo()}
      <br />
      <StatusLabel type="info">Info</StatusLabel>
    </>
  );
};

export const Success = () => {
  return (
    <>
      {deprecatedInfo()}
      <br />
      <StatusLabel type="success">Success</StatusLabel>
    </>
  );
};

export const Alert = () => {
  return (
    <>
      {deprecatedInfo()}
      <br />
      <StatusLabel type="alert">Alert</StatusLabel>
    </>
  );
};

export const Error = () => {
  return (
    <>
      {deprecatedInfo()}
      <br />
      <StatusLabel type="error">Error</StatusLabel>
    </>
  );
};

export const WithRoundedCorners = () => {
  return (
    <>
      {deprecatedInfo()}
      <br />
      <StatusLabel variant="rounded">Rounded</StatusLabel>
    </>
  );
};

export const Icons = () => (
  <>
    {deprecatedInfo()}
    <br />
    <br />
    <StatusLabel iconLeft={<IconInfoCircle />}>Default</StatusLabel>
    <br />
    <br />
    <StatusLabel type="info" iconLeft={<IconInfoCircle />}>
      Info
    </StatusLabel>
    <br />
    <br />
    <StatusLabel type="success" iconLeft={<IconCheckCircle />}>
      Success
    </StatusLabel>
    <br />
    <br />
    <StatusLabel type="alert" iconLeft={<IconAlertCircle />}>
      Alert
    </StatusLabel>
    <br />
    <br />
    <StatusLabel type="error" iconLeft={<IconError />}>
      Error
    </StatusLabel>
    <br />
    <br />
    <StatusLabel type="info" variant="rounded" iconLeft={<IconInfoCircle />}>
      Rounded
    </StatusLabel>
  </>
);

export const Playground = (args) => (
  <>
    <StatusLabel type={args.type}>{args.label}</StatusLabel>
  </>
);

Playground.parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  docs: {
    disable: true,
  },
};

Playground.args = {
  label: 'Status',
  type: 'neutral',
};

Playground.argTypes = {
  type: {
    options: ['neutral', 'info', 'success', 'alert', 'error'],
    control: { type: 'radio' },
  },
};
