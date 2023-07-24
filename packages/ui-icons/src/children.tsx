import { faChildren } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Children icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Children = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChildren} {...props} />;
};

export default Children;
