import React, { PureComponent } from 'react';
import cn from 'classnames';
import Button from 'react-md/lib/Buttons/Button';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import FontIcon from 'react-md/lib/FontIcons';

export default class SendMail extends PureComponent {
  state = { sending: false };
  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  timeout = null;
  sendMail = () => {
    if (this.state.sending) {
      return;
    }

    this.setState({ sending: true });
    this.timeout = setTimeout(() => {
      this.timeout = null;
      this.setState({ sending: false });
    }, 4000);
  };

  render() {
    const { sending } = this.state;

    return (
      <Card className="md-cell md-cell--12 md-text-container">
        <CardTitle title="Send Mail" />
        <CardText>
          <Button raised primary onClick={this.sendMail} className="drawers__routing__send-btn">Send Mail!</Button>
          <FontIcon
            className={cn('drawers__routing__send-icon', {
              'drawers__routing__send-icon--active': sending,
            })}
          >
            send
          </FontIcon>
        </CardText>
      </Card>
    );
  }
}
