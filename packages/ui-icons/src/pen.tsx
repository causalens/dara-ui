import { faPen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Pen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Pen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPen} {...props} />;
};

export default Pen;
