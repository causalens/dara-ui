import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MugSaucer icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MugSaucer = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMugSaucer} {...props} />;
};

export default MugSaucer;
