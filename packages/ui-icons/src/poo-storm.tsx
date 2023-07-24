import { faPooStorm } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PooStorm icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PooStorm = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPooStorm} {...props} />;
};

export default PooStorm;
