import { faDolly } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dolly icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dolly = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDolly} {...props} />;
};

export default Dolly;
