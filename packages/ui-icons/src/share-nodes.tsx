import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShareNodes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShareNodes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShareNodes} {...props} />;
};

export default ShareNodes;
