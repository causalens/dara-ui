import { faW } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charW icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charW = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faW} {...props} />;
};

export default charW;
