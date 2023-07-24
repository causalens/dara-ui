import { faMedal } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Medal icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Medal = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMedal} {...props} />;
};

export default Medal;
