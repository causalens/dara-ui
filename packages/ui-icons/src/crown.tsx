import { faCrown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Crown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Crown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCrown} {...props} />;
};

export default Crown;
