import { faMeteor } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Meteor icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Meteor = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMeteor} {...props} />;
};

export default Meteor;
