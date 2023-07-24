import { faRemove } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Remove icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Remove = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRemove} {...props} />;
};

export default Remove;
