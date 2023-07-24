import { faDemocrat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Democrat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Democrat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDemocrat} {...props} />;
};

export default Democrat;
