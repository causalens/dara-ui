import { faTowerObservation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TowerObservation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TowerObservation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTowerObservation} {...props} />;
};

export default TowerObservation;
