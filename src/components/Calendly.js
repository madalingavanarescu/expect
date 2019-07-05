import React, { Component } from 'react';

class Calendly extends React.Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js',
    );
    head.appendChild(script);

    console.log('da');
    /*setTimeout(function() {
      console.log(
        document.getElementsByClassName(
          'is-opaque history no-touchevents localstorage',
        ),
      );
      document.getElementsByClassName(
        'is-opaque history no-touchevents localstorage',
      )[0].style.backgroundColor = 'transparent';
    }, 10000);*/
  }

  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }

  render() {
    return (
      <div>
        <div id="schedule_form">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/madalinseomonitor/30min"
            style={{ height: '780px' }}
          />
        </div>
      </div>
    );
  }
}

export default Calendly;
