import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    checkedA: props.checkedStatus,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite style={{color: '#FF5722'}} />}
            checked={state.checkedA}
            onChange={handleChange('checkedA')}
            value="checkedA" />
  );
}

export default CheckboxLabels;