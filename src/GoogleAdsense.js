import React, { Component } from 'react';

export default class Ad extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: 'ca-pub-7964699062377847',
      enable_page_level_ads: true,
    });
  }

  render() {
    return (
      <div>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-7964699062377847"
          data-ad-slot="4833844307"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }
}
