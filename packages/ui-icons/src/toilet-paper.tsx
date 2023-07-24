import { faToiletPaper } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ToiletPaper icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ToiletPaper = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faToiletPaper} {...props} />;
};

export default ToiletPaper;
