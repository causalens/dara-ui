import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SmileWink icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SmileWink = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSmileWink} {...props} />;
};

export default SmileWink;
