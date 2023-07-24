import { faAward } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Award icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Award = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAward} {...props} />;
};

export default Award;
