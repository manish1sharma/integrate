import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  height: 150,
  width: 590,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Searchres = () => (
  <div>
    <Paper style={style} zDepth={5} >
    <Card>
    <CardHeader
      title="Search Result"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Res_1" />
      <RaisedButton label="Res_2" />
    </CardActions>
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
  </Paper>

  <Paper style={style} zDepth={5} >
  <Card>
  <CardHeader
    title="Search Main Result"
    subtitle="Subtitle"
    actAsExpander={true}
    showExpandableButton={true}
  />
  <CardActions>
    <RaisedButton label="Action3" />
    <RaisedButton label="Action4" />
  </CardActions>
  <CardText expandable={true}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
  </CardText>
</Card>
</Paper>

<Paper style={style} zDepth={5} >
<Card>
<CardHeader
  title="Extra Search Result"
  subtitle="Subtitle"
  actAsExpander={true}
  showExpandableButton={true}
/>
<CardActions>
  <FlatButton label="Res_5" />
  <RaisedButton label="Action_6" />
</CardActions>
<CardText expandable={true}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
</CardText>
</Card>
</Paper>
</div>

);

export default Searchres;
