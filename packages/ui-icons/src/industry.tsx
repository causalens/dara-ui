import { faIndustry } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Industry icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Industry = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIndustry} {...props} />;
};

export default Industry;
