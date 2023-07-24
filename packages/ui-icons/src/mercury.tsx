import { faMercury } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Mercury icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Mercury = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMercury} {...props} />;
};

export default Mercury;
