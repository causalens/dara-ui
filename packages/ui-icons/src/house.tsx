import { faHouse } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * House icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const House = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouse} {...props} />;
};

export default House;
