import { faMound } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Mound icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Mound = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMound} {...props} />;
};

export default Mound;
