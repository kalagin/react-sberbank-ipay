import * as React from 'react'
import window from '../../types';

export type Props = {
  apiToken: string;
  classNamePreloader?: string;
  language?: 'en' | 'ru';
};

export default class PayPreloader extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    // global instance for this component
    window.ipay = new window.IPAY({ api_token: props.apiToken, ...props });
  }

  render() {
    const {
      classNamePreloader,
    } = this.props

    return (
      <div className={classNamePreloader}></div>
    )
  }
}
