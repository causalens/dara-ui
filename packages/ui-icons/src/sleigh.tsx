import { faSleigh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Sleigh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Sleigh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSleigh} {...props} />;
};

export default Sleigh;
