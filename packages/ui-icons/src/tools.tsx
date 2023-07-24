import { faTools } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tools icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tools = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTools} {...props} />;
};

export default Tools;
