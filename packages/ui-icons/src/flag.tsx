import { faFlag } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Flag icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Flag = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFlag} {...props} />;
};

export default Flag;
