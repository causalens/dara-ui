import { faMale } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Male icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Male = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMale} {...props} />;
};

export default Male;
