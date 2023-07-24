import { faToiletPaperSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ToiletPaperSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ToiletPaperSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faToiletPaperSlash} {...props} />;
};

export default ToiletPaperSlash;
