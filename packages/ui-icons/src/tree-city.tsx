import { faTreeCity } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TreeCity icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TreeCity = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTreeCity} {...props} />;
};

export default TreeCity;
