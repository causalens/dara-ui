import { faMosque } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Mosque icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Mosque = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMosque} {...props} />;
};

export default Mosque;
