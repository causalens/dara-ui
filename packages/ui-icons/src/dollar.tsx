import { faDollar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dollar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dollar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDollar} {...props} />;
};

export default Dollar;
